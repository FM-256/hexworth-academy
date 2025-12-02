# **Lab Exercise: Configuring and Verifying Static IP Routes**

**Prepared by:** Gemini-Agent
**Subject:** Network Essentials Lab

---

### **1. Objective**

In this lab, you will apply your understanding of IP routing to build a multi-network environment, configure static routes, and verify connectivity between two separate networks. You will use Cisco Packet Tracer to simulate the environment and receive guidance on how to replicate this in a live Cisco DevNet sandbox.

### **2. Scenario**

Imagine a small business, "Innovate Inc.," has two departments: Engineering and Sales. Each department is on its own network to keep traffic separate. The Engineering department needs to access a server located on the Sales network. Your job is to establish a connection between these two networks by configuring the routers.

### **3. Network Topology**

You will build the following topology in Cisco Packet Tracer:

*   **2 Routers** (e.g., Cisco 4331 ISR)
*   **2 Switches** (e.g., Cisco 2960)
*   **2 PCs** (one for each network)

**Visual Diagram:**
```
  [PC-Engineering] ---- [Switch-Eng] ---- [Router-Eng] ---- (Serial Link) ---- [Router-Sales] ---- [Switch-Sales] ---- [PC-Sales]
```

### **4. IP Addressing Table**

| Device | Interface | IP Address | Subnet Mask | Default Gateway |
| :--- | :--- | :--- | :--- | :--- |
| **Router-Eng** | `GigabitEthernet0/0/0` | `192.168.1.1` | `255.255.255.0` | N/A |
| | `Serial0/1/0` | `10.0.0.1` | `255.255.255.252` | N/A |
| **Router-Sales** | `GigabitEthernet0/0/0` | `192.168.2.1` | `255.255.255.0` | N/A |
| | `Serial0/1/0` | `10.0.0.2` | `255.255.255.252` | N/A |
| **PC-Engineering**| `Ethernet0` | `192.168.1.10` | `255.255.255.0` | `192.168.1.1` |
| **PC-Sales** | `Ethernet0` | `192.168.2.10` | `255.255.255.0` | `192.168.2.1` |

---

### **Part 1: Build and Basic Configuration (Packet Tracer)**

1.  **Build the Topology:** Open Cisco Packet Tracer. Add the devices listed above and connect them with the appropriate cables (Copper Straight-Through for PC-Switch and Switch-Router, Serial DCE for the router-to-router link).
2.  **Configure PC IP Addresses:**
    *   Click on `PC-Engineering`, go to the `Desktop` tab -> `IP Configuration`.
    *   Enter the IP, Subnet Mask, and Default Gateway from the table.
    *   Repeat for `PC-Sales`.
3.  **Configure Router-Eng Interfaces:**
    *   Click on `Router-Eng`, go to the `CLI` tab.
    *   Enter the following commands:
    ```
    enable
    configure terminal
    ! Configure the LAN interface
    interface GigabitEthernet0/0/0
    ip address 192.168.1.1 255.255.255.0
    no shutdown
    exit
    ! Configure the WAN (serial) interface
    interface Serial0/1/0
    ip address 10.0.0.1 255.255.255.252
    clock rate 64000  ! (Apply clock rate only on the DCE side of the serial cable)
    no shutdown
    end
    ```
4.  **Configure Router-Sales Interfaces:**
    *   Click on `Router-Sales`, go to the `CLI` tab.
    *   Enter the following commands:
    ```
    enable
    configure terminal
    ! Configure the LAN interface
    interface GigabitEthernet0/0/0
    ip address 192.168.2.1 255.255.255.0
    no shutdown
    exit
    ! Configure the WAN (serial) interface
    interface Serial0/1/0
    ip address 10.0.0.2 255.255.255.252
    no shutdown
    end
    ```

### **Part 2: Connectivity Verification (Before Routing)**

1.  **Ping within the Engineering Network:**
    *   Open the Command Prompt on `PC-Engineering`.
    *   Type: `ping 192.168.1.1`
    *   **Expected Result:** The ping should be **successful**. This proves local connectivity.
2.  **Ping across to the Sales Network:**
    *   From the same command prompt on `PC-Engineering`.
    *   Type: `ping 192.168.2.10`
    *   **Expected Result:** The ping should **fail** with a "Request timed out" or "Destination host unreachable" message. This is because the Engineering router does not know how to reach the `192.168.2.0/24` network.

### **Part 3: Static Route Configuration**

1.  **Configure the Route on Router-Eng:**
    *   On `Router-Eng`, enter the following commands:
    ```
    configure terminal
    ! Tell Router-Eng how to reach the Sales network
    ip route 192.168.2.0 255.255.255.0 10.0.0.2
    end
    copy running-config startup-config
    ```
2.  **Configure the Route on Router-Sales:**
    *   On `Router-Sales`, enter the following commands:
    ```
    configure terminal
    ! Tell Router-Sales how to reach the Engineering network
    ip route 192.168.1.0 255.255.255.0 10.0.0.1
    end
    copy running-config startup-config
    ```

### **Part 4: Final Verification**

1.  **Verify the Route on Router-Eng:**
    *   From `Router-Eng`, run `show ip route`. You should see a new static route:
    ```
    S   192.168.2.0/24 [1/0] via 10.0.0.2
    ```
2.  **Ping Across Networks Again:**
    *   Go back to the Command Prompt on `PC-Engineering`.
    *   Type: `ping 192.168.2.10`
    *   **Expected Result:** The ping should now be **successful**!
3.  **Trace the Path:**
    *   From the same command prompt, use the `tracert` command:
    *   Type: `tracert 192.168.2.10`
    *   **Expected Result:** You will see the packet's journey:
        1.  `192.168.1.1` (Your gateway, Router-Eng)
        2.  `10.0.0.2` (The next hop, Router-Sales)
        3.  `192.168.2.10` (The final destination, PC-Sales)

### **Part 5: Cisco DevNet Sandbox Integration**

This lab can be replicated on live, enterprise-grade equipment using a free Cisco DevNet sandbox.

1.  **Find a Sandbox:**
    *   Go to the [Cisco DevNet Sandbox Catalog](https://developer.cisco.com/site/sandbox/).
    *   Look for an "IOS XE" sandbox, such as the "IOS XE on CSR Recommended" sandbox, which provides web-based and VPN access to live routers.
2.  **Reserve and Connect:**
    *   Reserve the sandbox (this may take a few minutes to set up).
    *   Follow the provided instructions to connect to the routers' CLIs, typically via SSH or a web console.
3.  **Adapt and Implement:**
    *   The sandbox will provide you with a set of pre-configured devices and their IP addresses. You will need to **adapt** this lab's IP scheme to the interfaces and networks available in the sandbox.
    *   Check the existing configuration with `show ip interface brief` and `show ip route`.
    *   Identify two networks you can use as your "Engineering" and "Sales" LANs and a link between two routers.
    *   Apply the same `ip route ...` commands from Part 3, using the correct IP addresses for the sandbox environment.
    *   Verify connectivity using `ping` and `traceroute` just as you did in Packet Tracer.