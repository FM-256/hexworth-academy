// Test file for ACL Wildcard Calculator
// Extracted from acl-presentation.html

// ========== CALCULATOR FUNCTION ==========
function calculateWildcard(input) {
    const wildcardParts = input.split('.');
    if (wildcardParts.length !== 4) {
        return { error: 'Invalid format. Use format: 0.0.0.255' };
    }

    // Calculate subnet mask (inverse of wildcard)
    const wildcardInts = wildcardParts.map(part => parseInt(part));
    const subnetParts = wildcardInts.map(part => 255 - part);
    const subnetMask = subnetParts.join('.');

    // Calculate CIDR prefix
    // Check if subnet mask is contiguous (valid for CIDR)
    const subnetBinary = subnetParts.map(p => p.toString(2).padStart(8, '0')).join('');
    const isContiguous = /^1*0*$/.test(subnetBinary);

    let cidr = 0;
    if (isContiguous) {
        // Count leading 1s in subnet mask
        for (let bit of subnetBinary) {
            if (bit === '1') cidr++;
            else break;
        }
    } else {
        cidr = 'N/A'; // Non-contiguous mask (not valid CIDR)
    }

    // Calculate number of addresses (count 1s in WILDCARD mask)
    let wildcardBits = 0;
    wildcardInts.forEach(part => {
        wildcardBits += (part.toString(2).match(/1/g) || []).length;
    });
    const addresses = Math.pow(2, wildcardBits);

    // Use appropriate base IP for demonstration (non-zero example)
    let baseIP = '192.168.1.0';
    let exampleStart = baseIP.split('.').map(p => parseInt(p));
    let exampleEnd = [...exampleStart];

    // Calculate example range
    for (let i = 0; i < 4; i++) {
        exampleStart[i] = exampleStart[i] & (255 - wildcardInts[i]); // Zero out wildcard bits
        exampleEnd[i] = exampleStart[i] | wildcardInts[i]; // Set wildcard bits to 1
    }

    const exampleRange = {
        start: exampleStart.join('.'),
        end: exampleEnd.join('.')
    };

    return {
        wildcard: input,
        subnetMask: subnetMask,
        cidr: cidr,
        addresses: addresses,
        wildcardBits: wildcardBits,
        exampleRange: exampleRange,
        isContiguous: isContiguous,
        subnetBinary: subnetBinary
    };
}

// ========== TEST CASES ==========
const testCases = [
    // Standard test cases
    { input: '0.0.0.0', expected: { cidr: 32, addresses: 1, wildcardBits: 0, subnetMask: '255.255.255.255' } },
    { input: '0.0.0.255', expected: { cidr: 24, addresses: 256, wildcardBits: 8, subnetMask: '255.255.255.0' } },
    { input: '0.0.3.255', expected: { cidr: 22, addresses: 1024, wildcardBits: 10, subnetMask: '255.255.252.0' } },
    { input: '0.0.255.255', expected: { cidr: 16, addresses: 65536, wildcardBits: 16, subnetMask: '255.255.0.0' } },
    { input: '0.255.255.255', expected: { cidr: 8, addresses: 16777216, wildcardBits: 24, subnetMask: '255.0.0.0' } },
    { input: '255.255.255.255', expected: { cidr: 0, addresses: 4294967296, wildcardBits: 32, subnetMask: '0.0.0.0' } },

    // Non-contiguous masks
    { input: '255.0.0.0', expected: { cidr: 'N/A', addresses: 16777216, wildcardBits: 24, subnetMask: '0.255.255.255' } },
    { input: '255.255.255.0', expected: { cidr: 'N/A', addresses: 16777216, wildcardBits: 24, subnetMask: '0.0.0.255' } },

    // Unusual masks
    { input: '0.0.15.255', expected: { cidr: 20, addresses: 4096, wildcardBits: 12, subnetMask: '255.255.240.0' } },
    { input: '0.63.255.255', expected: { cidr: 10, addresses: 4194304, wildcardBits: 22, subnetMask: '255.192.0.0' } },

    // Additional edge cases
    { input: '0.0.0.1', expected: { cidr: 'N/A', addresses: 2, wildcardBits: 1, subnetMask: '255.255.255.254' } },
    { input: '0.0.0.3', expected: { cidr: 30, addresses: 4, wildcardBits: 2, subnetMask: '255.255.255.252' } },
    { input: '0.0.0.7', expected: { cidr: 29, addresses: 8, wildcardBits: 3, subnetMask: '255.255.255.248' } },
    { input: '0.0.0.15', expected: { cidr: 28, addresses: 16, wildcardBits: 4, subnetMask: '255.255.255.240' } },
    { input: '0.0.0.31', expected: { cidr: 27, addresses: 32, wildcardBits: 5, subnetMask: '255.255.255.224' } },
    { input: '0.0.0.63', expected: { cidr: 26, addresses: 64, wildcardBits: 6, subnetMask: '255.255.255.192' } },
    { input: '0.0.0.127', expected: { cidr: 25, addresses: 128, wildcardBits: 7, subnetMask: '255.255.255.128' } },
];

// ========== TEST EXECUTION ==========
console.log('='.repeat(80));
console.log('ACL WILDCARD CALCULATOR - MATHEMATICAL VERIFICATION TEST');
console.log('='.repeat(80));
console.log();

let passCount = 0;
let failCount = 0;
const failures = [];

testCases.forEach((test, index) => {
    console.log(`\nTest Case ${index + 1}: ${test.input}`);
    console.log('-'.repeat(60));

    const result = calculateWildcard(test.input);

    if (result.error) {
        console.log(`ERROR: ${result.error}`);
        failCount++;
        failures.push({ test: test.input, error: result.error });
        return;
    }

    // Verify each field
    let testPassed = true;
    const errors = [];

    // Check CIDR
    if (result.cidr !== test.expected.cidr) {
        testPassed = false;
        errors.push(`CIDR: Expected ${test.expected.cidr}, got ${result.cidr}`);
    }

    // Check addresses
    if (result.addresses !== test.expected.addresses) {
        testPassed = false;
        errors.push(`Addresses: Expected ${test.expected.addresses}, got ${result.addresses}`);
    }

    // Check wildcard bits
    if (result.wildcardBits !== test.expected.wildcardBits) {
        testPassed = false;
        errors.push(`Wildcard Bits: Expected ${test.expected.wildcardBits}, got ${result.wildcardBits}`);
    }

    // Check subnet mask
    if (result.subnetMask !== test.expected.subnetMask) {
        testPassed = false;
        errors.push(`Subnet Mask: Expected ${test.expected.subnetMask}, got ${result.subnetMask}`);
    }

    // Display results
    console.log(`Wildcard Mask: ${result.wildcard}`);
    console.log(`Subnet Mask: ${result.subnetMask} (Expected: ${test.expected.subnetMask})`);
    console.log(`CIDR: /${result.cidr} (Expected: /${test.expected.cidr})`);
    console.log(`Addresses: ${result.addresses} (Expected: ${test.expected.addresses})`);
    console.log(`Wildcard Bits: ${result.wildcardBits} (Expected: ${test.expected.wildcardBits})`);
    console.log(`Is Contiguous: ${result.isContiguous}`);
    console.log(`Binary (Subnet): ${result.subnetBinary}`);
    console.log(`Example Range: ${result.exampleRange.start} - ${result.exampleRange.end}`);

    if (testPassed) {
        console.log('✅ PASS');
        passCount++;
    } else {
        console.log('❌ FAIL');
        console.log('Errors:');
        errors.forEach(err => console.log(`  - ${err}`));
        failCount++;
        failures.push({ test: test.input, errors: errors, result: result });
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
