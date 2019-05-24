# smpp-errors
SMPP message state and error codes

## Message State

The following is a list of allowable states for a short message. The MC returns the
message_state value to the ESME as part of the query_sm_resp or
query_broadcast_sm_resp PDU.
Intermediate states are states that can change. Final states are states that represent an end
of life state for a message.

For example, a message in retry may return an ENROUTE state. At some point in the future,
this message will either expire or be delivered. The state will then progress to EXPIRED or
DELIVERED. Thus a message in ENROUTE state is said to be in an intermediate state.
A message in DELIVERED or EXPIRED state cannot progress to another state. These states
are therefore final states.

State | Value | Type | Description
--- | :---: | --- | ---
SCHEDULED     | 0 | Intermediate | The message is scheduled. Delivery has not yet been initiated. A message submitted with a scheduled delivery time may return this state when queried.
ENROUTE       | 1 | Intermediate | The message is in enroute state. This is a general state used to describe a message as being active within the MC. The message may be in retry or dispatched to a mobile network for delivery to the mobile.
DELIVERED     | 2 | Final | Message is delivered to destination. The message has been delivered to the destination. No further deliveries will occur.
EXPIRED       | 3 | Final | Message validity period has expired. The message has failed to be delivered within its validity period and/or retry period. No further delivery attempts will be made.
DELETED       | 4 | Final | Message has been deleted. The message has been cancelled or deleted from the MC. No further delivery attempts will take place.
UNDELIVERABLE | 5 | Final | Message is undeliverable. The message has encountered a delivery error and is deemed permanently undeliverable. No further delivery attempts will be made.Certain network or MC internal errors result in the permanent non-delivery of a message. Examples of such errors would be an unknown subscriber or network error that indicated that the given destination mobile was denied SMS service or could not support SMS.
ACCEPTED      | 6 | Final | Message is in accepted state (i.e. has been manually read on behalf of the subscriber by customer service). This state is used to depict intervention on the MC side. Sometimes a malformed message can cause a mobile to power-off or experience problems. The result is that all messages to that mobile may remain queued until the problem message is removed or expires. In certain circumstances, a mobile network support service or administrator may manually accept a message to prevent further deliveries and allow other queued messages to be delivered.
UNKNOWN       | 7 | N/A   | Message is in invalid state. The message state is unknown. This may be due to some internal MC problem which may be intermediate or a permanent. This state should never be returned. A MC experiencing difficulties that prevents it from returning a message state, would use this state. 
REJECTED      | 8 | Final | Message is in a rejected state. The message has been rejected by a delivery interface. The reasons for this rejection are vendor and network specific. No further delivery attempts will be made.
SKIPPED       | 9 | Final | The message was accepted but not transmitted or broadcast on the network. A skipped message is one that was deliberately ignored according to vendor or network-specific rules. No further delivery attempts will be made.

## Error Code
The error code for a delivery failure will be included in the network_error_code field of the deliver_sm PDU when 
available.

The network_error_code is encoded according to SMPP specification where the network type is the first octet 
(always 7 => SMPP Error) and the error code is an integer with 2 octets. 

All SMPP error codes may be returned. In addition, the following MC Vendor specific errors are defined.

Addition error codes in the range 0x400-0x4FF may be added at any time.

Error Code | Value | Description
 :--- | --- | :---
DESTINATION_UNKNOWN | 0x401 | Invalid or unknown destination address. 
NO_ROUTE_TO_DESTINATION | 0x402 | No route to the destination address. For example, some destination addresses are assigned to carriers that are no longer operating (MTU, Phonero)  
SMS_NOT_SUPPORTED | 0x403 | The terminal does not support SMS.
TERMINAL_NOT_AVAILABLE | 0x404 | The terminal is not available.
TERMINAL_MEMORY_FULL | 0x405 | The memory on the terminal is full.
BLACKLISTED | 0x406 | The destination address has been blacklisted by the carrier.
MESSAGE_CONTENT_INVALID | 0x407 | The content of the message was invalid.
BLOCKED_PAYMENT_MISSING | 0x408 | Blocked due to missing payment by the subscriber. 