'use strict';

module.exports = {
    /**
     * The following is a list of allowable states for a short message. The MC returns the
     * message_state value to the ESME as part of the query_sm_resp or
     * query_broadcast_sm_resp PDU.
     * Intermediate states are states that can change. Final states are states that represent an end
     * of life state for a message.
     * For example, a message in retry may return an ENROUTE state. At some point in the future,
     * this message will either expire or be delivered. The state will then progress to EXPIRED or
     * DELIVERED. Thus a message in ENROUTE state is said to be in an intermediate state.
     * A message in DELIVERED or EXPIRED state cannot progress to another state. These states
     * are therefore final states.
     * @see section 4.7.15 of SMPP specification v5.0
     */
    MESSAGE_STATE: {
        SCHEDULED: 0,
        ENROUTE: 1,
        DELIVERED: 2,
        EXPIRED: 3,
        DELETED: 4,
        UNDELIVERABLE: 5,
        ACCEPTED: 6,
        UNKNOWN: 7,
        REJECTED: 8,
        SKIPPED: 9
    },
    /**
     * The command_status field of a SMPP message response indicates the success or failure of
     * a SMPP request. It is relevant only in the SMPP response message and should be set to
     * NULL in SMPP request messages.
     * @see section 4.7.6 of SMPP specification v5.0
     */
    ERROR_CODE: {
        ESME_ROK: 0x0,
        ESME_RINVMSGLEN: 0x1,
        ESME_RINVCMDLEN: 0x2,
        ESME_RINVCMDID: 0x3,
        ESME_RINVBNDSTS: 0x4,
        ESME_RALYBND: 0x5,
        ESME_RINVPRTFLG: 0x6,
        ESME_RINVREGDLVFLG: 0x7,
        ESME_RSYSERR: 0x8,
        ESME_RINVSRCADR: 0xA,
        ESME_RINVDSTADR: 0xB,
        ESME_RINVMSGID: 0xC,
        ESME_RBINDFAIL: 0xD,
        ESME_RINVPASWD: 0xE,
        ESME_RINVSYSID: 0xF,
        ESME_RCANCELFAIL: 0x11,
        ESME_RREPLACEFAIL: 0x13,
        ESME_RMSGQFUL: 0x14,
        ESME_RINVSERTYP: 0x15,
        ESME_RINVNUMDESTS: 0x33,
        ESME_RINVDLNAME: 0x34,
        ESME_RINVDESTFLAG: 0x40,
        ESME_RINVSUBREP: 0x42,
        ESME_RINVESMCLASS: 0x43,
        ESME_RCNTSUBDL: 0x44,
        ESME_RSUBMITFAIL: 0x45,
        ESME_RINVSRCTON: 0x48,
        ESME_RINVSRCNPI: 0x49,
        ESME_RINVDSTTON: 0x50,
        ESME_RINVDSTNPI: 0x51,
        ESME_RINVSYSTYP: 0x53,
        ESME_RINVREPFLAG: 0x54,
        ESME_RINVNUMMSGS: 0x55,
        ESME_RTHROTTLED: 0x58,
        ESME_RINVSCHED: 0x61,
        ESME_RINVEXPIRY: 0x62,
        ESME_RINVDFTMSGID: 0x63,
        ESME_RX_T_APPN: 0x64,
        ESME_RX_P_APPN: 0x65,
        ESME_RX_R_APPN: 0x66,
        ESME_RQUERYFAIL: 0x67,
        ESME_RINVTLVSTREAM: 0xC0,
        ESME_RTLVNOTALLWD: 0xC1,
        ESME_RINVTLVLEN: 0xC2,
        ESME_RMISSINGTLV: 0xC3,
        ESME_RINVTLVVAL: 0xC4,
        ESME_RDELIVERYFAILURE: 0xFE,
        ESME_RUNKNOWNERR: 0xFF,
        ESME_RSERTYPUNAUTH: 0x100,
        ESME_RPROHIBITED: 0x101,
        ESME_RSERTYPUNAVAIL: 0x102,
        ESME_RSERTYPDENIED: 0x103,
        ESME_RINVDCS: 0x104,
        ESME_RINVSRCADDRSUBUNIT: 0x105,
        ESME_RINVDSTADDRSUBUNIT: 0x106,
        ESME_RINVBCASTFREQINT: 0x107,
        ESME_RINVBCASTALIAS_NAME: 0x108,
        ESME_RINVBCASTAREAFMT: 0x109,
        ESME_RINVNUMBCAST_AREAS: 0x10A,
        ESME_RINVBCASTCNTTYPE: 0x10B,
        ESME_RINVBCASTMSGCLASS: 0x10C,
        ESME_RBCASTFAIL: 0x10D,
        ESME_RBCASTQUERYFAIL: 0x10E,
        ESME_RBCASTCANCELFAIL: 0x10F,
        ESME_RINVBCAST_REP: 0x110,
        ESME_RINVBCASTSRVGRP: 0x111,
        ESME_RINVBCASTCHANIND: 0x112,
        DESTINATION_UNKNOWN: 0x401,
        NO_ROUTE_TO_DESTINATION: 0x402,
        SMS_NOT_SUPPORTED: 0x403,
        TERMINAL_NOT_AVAILABLE: 0x404,
        TERMINAL_MEMORY_FULL: 0x405,
        BLACKLISTED: 0x406,
        MESSAGE_CONTENT_INVALID: 0x407,
        BLOCKED_PAYMENT_MISSING: 0x408
    }
};