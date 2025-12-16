// Test file for Subnet Calculator
// Extracted from interactive-network-simulator.v2.html

// ========== HELPER FUNCTIONS ==========
function cidrToMask(cidr) {
    const mask = [];
    for (let i = 0; i < 4; i++) {
        const n = Math.min(cidr, 8);
        mask.push(256 - Math.pow(2, 8 - n));
        cidr -= n;
    }
    return mask;
}

function isValidIP(ip) {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    return parts.every(part => {
        const num = parseInt(part);
        return !isNaN(num) && num >= 0 && num <= 255;
    });
}

// ========== CALCULATOR FUNCTION ==========
function calculateSubnet(ipInput, cidrInput) {
    // Validate inputs
    if (!isValidIP(ipInput)) {
        return { error: "Invalid IP address format" };
    }

    if (isNaN(cidrInput) || cidrInput < 0 || cidrInput > 32) {
        return { error: "CIDR must be between 0 and 32" };
    }

    // Calculate subnet details
    const ipParts = ipInput.split('.').map(Number);
    const subnetMask = cidrToMask(cidrInput);
    const wildcardMask = subnetMask.map(octet => 255 - octet);

    const networkAddress = ipParts.map((octet, i) => octet & subnetMask[i]);
    const broadcastAddress = networkAddress.map((octet, i) => octet | wildcardMask[i]);

    const firstUsable = [...networkAddress];
    firstUsable[3] += 1;

    const lastUsable = [...broadcastAddress];
    lastUsable[3] -= 1;

    const hostBits = 32 - cidrInput;
    const totalHosts = Math.pow(2, hostBits);
    const usableHosts = hostBits > 1 ? totalHosts - 2 : (hostBits === 1 ? 2 : 1);

    return {
        networkAddress: networkAddress.join('.'),
        subnetMask: subnetMask.join('.'),
        wildcardMask: wildcardMask.join('.'),
        firstUsable: firstUsable.join('.'),
        lastUsable: lastUsable.join('.'),
        broadcastAddress: broadcastAddress.join('.'),
        totalHosts: totalHosts,
        usableHosts: usableHosts,
        cidr: cidrInput,
        hostBits: hostBits
    };
}

// ========== TEST CASES ==========
const testCases = [
    // Standard Class C
    {
        ip: '192.168.1.100',
        cidr: 24,
        expected: {
            networkAddress: '192.168.1.0',
            subnetMask: '255.255.255.0',
            wildcardMask: '0.0.0.255',
            firstUsable: '192.168.1.1',
            lastUsable: '192.168.1.254',
            broadcastAddress: '192.168.1.255',
            totalHosts: 256,
            usableHosts: 254
        }
    },
    // Standard Class B
    {
        ip: '172.16.50.100',
        cidr: 16,
        expected: {
            networkAddress: '172.16.0.0',
            subnetMask: '255.255.0.0',
            wildcardMask: '0.0.255.255',
            firstUsable: '172.16.0.1',
            lastUsable: '172.16.255.254',
            broadcastAddress: '172.16.255.255',
            totalHosts: 65536,
            usableHosts: 65534
        }
    },
    // Standard Class A
    {
        ip: '10.50.100.200',
        cidr: 8,
        expected: {
            networkAddress: '10.0.0.0',
            subnetMask: '255.0.0.0',
            wildcardMask: '0.255.255.255',
            firstUsable: '10.0.0.1',
            lastUsable: '10.255.255.254',
            broadcastAddress: '10.255.255.255',
            totalHosts: 16777216,
            usableHosts: 16777214
        }
    },
    // /25 subnet
    {
        ip: '192.168.1.200',
        cidr: 25,
        expected: {
            networkAddress: '192.168.1.128',
            subnetMask: '255.255.255.128',
            wildcardMask: '0.0.0.127',
            firstUsable: '192.168.1.129',
            lastUsable: '192.168.1.254',
            broadcastAddress: '192.168.1.255',
            totalHosts: 128,
            usableHosts: 126
        }
    },
    // /22 subnet
    {
        ip: '192.168.1.0',
        cidr: 22,
        expected: {
            networkAddress: '192.168.0.0',
            subnetMask: '255.255.252.0',
            wildcardMask: '0.0.3.255',
            firstUsable: '192.168.0.1',
            lastUsable: '192.168.3.254',
            broadcastAddress: '192.168.3.255',
            totalHosts: 1024,
            usableHosts: 1022
        }
    },
    // /30 subnet (point-to-point)
    {
        ip: '10.1.1.4',
        cidr: 30,
        expected: {
            networkAddress: '10.1.1.4',
            subnetMask: '255.255.255.252',
            wildcardMask: '0.0.0.3',
            firstUsable: '10.1.1.5',
            lastUsable: '10.1.1.6',
            broadcastAddress: '10.1.1.7',
            totalHosts: 4,
            usableHosts: 2
        }
    },
    // /31 subnet (point-to-point RFC 3021)
    {
        ip: '10.1.1.0',
        cidr: 31,
        expected: {
            networkAddress: '10.1.1.0',
            subnetMask: '255.255.255.254',
            wildcardMask: '0.0.0.1',
            firstUsable: '10.1.1.1',
            lastUsable: '10.1.1.0',
            broadcastAddress: '10.1.1.1',
            totalHosts: 2,
            usableHosts: 2
        }
    },
    // /32 subnet (host route)
    {
        ip: '192.168.1.1',
        cidr: 32,
        expected: {
            networkAddress: '192.168.1.1',
            subnetMask: '255.255.255.255',
            wildcardMask: '0.0.0.0',
            firstUsable: '192.168.1.2',
            lastUsable: '192.168.1.0',
            broadcastAddress: '192.168.1.1',
            totalHosts: 1,
            usableHosts: 1
        }
    },
    // /0 (entire internet)
    {
        ip: '0.0.0.0',
        cidr: 0,
        expected: {
            networkAddress: '0.0.0.0',
            subnetMask: '0.0.0.0',
            wildcardMask: '255.255.255.255',
            firstUsable: '0.0.0.1',
            lastUsable: '255.255.255.254',
            broadcastAddress: '255.255.255.255',
            totalHosts: 4294967296,
            usableHosts: 4294967294
        }
    },
    // /26 subnet
    {
        ip: '192.168.10.45',
        cidr: 26,
        expected: {
            networkAddress: '192.168.10.0',
            subnetMask: '255.255.255.192',
            wildcardMask: '0.0.0.63',
            firstUsable: '192.168.10.1',
            lastUsable: '192.168.10.62',
            broadcastAddress: '192.168.10.63',
            totalHosts: 64,
            usableHosts: 62
        }
    },
    // /27 subnet
    {
        ip: '10.1.1.64',
        cidr: 27,
        expected: {
            networkAddress: '10.1.1.64',
            subnetMask: '255.255.255.224',
            wildcardMask: '0.0.0.31',
            firstUsable: '10.1.1.65',
            lastUsable: '10.1.1.94',
            broadcastAddress: '10.1.1.95',
            totalHosts: 32,
            usableHosts: 30
        }
    },
    // /28 subnet
    {
        ip: '172.16.0.0',
        cidr: 28,
        expected: {
            networkAddress: '172.16.0.0',
            subnetMask: '255.255.255.240',
            wildcardMask: '0.0.0.15',
            firstUsable: '172.16.0.1',
            lastUsable: '172.16.0.14',
            broadcastAddress: '172.16.0.15',
            totalHosts: 16,
            usableHosts: 14
        }
    },
    // /29 subnet
    {
        ip: '192.168.1.8',
        cidr: 29,
        expected: {
            networkAddress: '192.168.1.8',
            subnetMask: '255.255.255.248',
            wildcardMask: '0.0.0.7',
            firstUsable: '192.168.1.9',
            lastUsable: '192.168.1.14',
            broadcastAddress: '192.168.1.15',
            totalHosts: 8,
            usableHosts: 6
        }
    }
];

// ========== TEST EXECUTION ==========
console.log('='.repeat(80));
console.log('SUBNET CALCULATOR - MATHEMATICAL VERIFICATION TEST');
console.log('='.repeat(80));
console.log();

let passCount = 0;
let failCount = 0;
const failures = [];

testCases.forEach((test, index) => {
    console.log(`\nTest Case ${index + 1}: ${test.ip}/${test.cidr}`);
    console.log('-'.repeat(60));

    const result = calculateSubnet(test.ip, test.cidr);

    if (result.error) {
        console.log(`ERROR: ${result.error}`);
        failCount++;
        failures.push({ test: `${test.ip}/${test.cidr}`, error: result.error });
        return;
    }

    // Verify each field
    let testPassed = true;
    const errors = [];

    // Check each expected field
    Object.keys(test.expected).forEach(field => {
        if (result[field] !== test.expected[field]) {
            testPassed = false;
            errors.push(`${field}: Expected ${test.expected[field]}, got ${result[field]}`);
        }
    });

    // Display results
    console.log(`Network Address: ${result.networkAddress} (Expected: ${test.expected.networkAddress})`);
    console.log(`Subnet Mask: ${result.subnetMask} (Expected: ${test.expected.subnetMask})`);
    console.log(`Wildcard Mask: ${result.wildcardMask} (Expected: ${test.expected.wildcardMask})`);
    console.log(`First Usable: ${result.firstUsable} (Expected: ${test.expected.firstUsable})`);
    console.log(`Last Usable: ${result.lastUsable} (Expected: ${test.expected.lastUsable})`);
    console.log(`Broadcast: ${result.broadcastAddress} (Expected: ${test.expected.broadcastAddress})`);
    console.log(`Total Hosts: ${result.totalHosts} (Expected: ${test.expected.totalHosts})`);
    console.log(`Usable Hosts: ${result.usableHosts} (Expected: ${test.expected.usableHosts})`);

    if (testPassed) {
        console.log('✅ PASS');
        passCount++;
    } else {
        console.log('❌ FAIL');
        console.log('Errors:');
        errors.forEach(err => console.log(`  - ${err}`));
        failCount++;
        failures.push({ test: `${test.ip}/${test.cidr}`, errors: errors, result: result });
    }
});

// ========== SUMMARY ==========
console.log('\n' + '='.repeat(80));
console.log('TEST SUMMARY');
console.log('='.repeat(80));
console.log(`Total Tests: ${testCases.length}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Success Rate: ${((passCount / testCases.length) * 100).toFixed(2)}%`);

if (failures.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('FAILURES DETAIL');
    console.log('='.repeat(80));
    failures.forEach((failure, index) => {
        console.log(`\n${index + 1}. Input: ${failure.test}`);
        if (failure.error) {
            console.log(`   Error: ${failure.error}`);
        } else {
            failure.errors.forEach(err => console.log(`   - ${err}`));
        }
    });
}

console.log('\n' + '='.repeat(80));
