import {
    DashboardIcon,
    user_dash,
    wallet_dash,
    transaction_dash,
    fee_dash,
    notification_dash,
    kyc_dash,
    market_dash,
    security_dash,
    report_dash,
    log_dash,
    support_dash,
    team_dash,
    setting_dash,
  } from "../constants/Images";
  
  export const Sidebar_links = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: DashboardIcon,
      sublinks: [],
    },
    {
      name: "User Management",
      link: "/user/management",
      icon: user_dash,
      sublinks: [],
    },
    {
      name: "Wallet Management",
      link: "/wallet/virtual",
      icon: wallet_dash,
      sublinks: [
        {
          name: "Virtual Wallet",
          link: "/wallet/virtual",
          icon: "bi bi-credit-card",
        },
        {
          name: "Master Wallet",
          link: "/wallet/master",
          icon: "bi bi-briefcase",
        },
      ],
    },
    {
      name: "Transactions",
      link: "/Transactions",
      icon: transaction_dash,
      sublinks: [],
    },
    {
      name: "Fee Management",
      link: "/fee/management",
      icon: fee_dash,
      sublinks: [],
    },
    {
      name: "Notifications",
      link: "/nodification",
      icon: notification_dash,
      sublinks: [],
    },
    {
      name: "KYC & Compliance",
      link: "/kyc&compliance/kyc",
      icon: kyc_dash,
      sublinks: [
        {
          name: "KYC",
          link: "/kyc&compliance/kyc",
          icon: "bi bi-person-check",
        },
        {
          name: "AMC Monitoring",
          link: "/kyc&compliance/amcMonitoring",
          icon: "bi bi-clipboard-data",
        },
      ],
    },
    {
      name: "Market Data",
      link: "/MarketData",
      icon: market_dash,
      sublinks: [],
    },
    {
      name: "Security",
      link: "/security",
      icon: security_dash,
      sublinks: [],
    },
    {
      name: "Referral Management",
      link: "/refferal/management",
      icon: fee_dash,
      sublinks: [],
    },
    {
      name: "Reports & Analytics",
      link: "/report&analytics",
      icon: report_dash,
      sublinks: [],
    },
    {
      name: "Logs",
      link: "/logs",
      icon: log_dash,
      sublinks: [],
    },
    {
      name: "Support",
      link: "/support",
      icon: support_dash,
      sublinks: [],
    },
    {
      name: "Team Chat",
      link: "/teamChat",
      icon: team_dash,
      sublinks: [],
    },
    {
      name: "Settings",
      link: "/Settings",
      icon: setting_dash,
      sublinks: [],
    },
  ];
  


// exporting topbar imgs
export const Topbar_profile_Left = [
    {
        "profileImage": "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
        "profileImage": "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        "profileImage": "https://randomuser.me/api/portraits/women/46.jpg"
    },
    {
        "profileImage": "https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
        "profileImage": "https://randomuser.me/api/portraits/men/48.jpg"
    }
]




//  ______________________________Dashboard Dummy______________________
export const dashboard_legends = [
    { color: "#126EB9", label: "Users" },
    { color: "#78CA19", label: "Transactions" },
    { color: "#B95A12", label: "Revenue" },
    { color: "#CA1919", label: "Wallet" },
];
export const Dashboard_categoryOptions = [
    { value: "users", name: "Users" },
    { value: "transactions", name: "Transactions" },
    { value: "revenue", name: "Revenue" },
    { value: "wallet", name: "Wallet" },
];

export const Dashboard_periodOptions = [
    { value: "monthly", name: "Monthly" },
    { value: "yearly", name: "Yearly" },
    { value: "weekly", name: "Weekly" },
];

export const Dashboard_cryptoWallet = [
    {
        "crypto_name": 'BTC',
        "value": '3.01'
    },
    {
        "crypto_name": 'BTC',
        "value": '4.01'
    },
    {
        "crypto_name": 'BTC',
        "value": '4.01'
    },
    {
        "crypto_name": 'BTC',
        "value": '5.01'
    },
    {
        "crypto_name": 'BTC',
        "value": '5.25'
    },
    {
        "crypto_name": 'BTC',
        "value": '0.01'
    },
    {
        "crypto_name": 'BTC',
        "value": '1.01'
    },
    {
        "crypto_name": 'BTC',
        "value": '7.01'
    },
    {
        "crypto_name": 'BTC',
        "value": '7.01'
    },
    {
        "crypto_name": 'BTC',
        "value": '9.01'
    },
]




//  ______________________________User Management Dummy______________________
export const users_table = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "07033484845",
        "status": "online"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "phone": "07033484845",
        "status": "offline"
    },
    {
        "id": 3,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "phone": "07033484845",
        "status": "online"
    },
    {
        "id": 4,
        "name": "Bob Brown",
        "email": "bob.brown@example.com",
        "phone": "07033484845",
        "status": "offline"
    },
    {
        "id": 5,
        "name": "Charlie Davis",
        "email": "charlie.davis@example.com",
        "phone": "07033484845",
        "status": "online"
    },
    {
        "id": 6,
        "name": "Emily Wilson",
        "email": "emily.wilson@example.com",
        "phone": "07033484845",
        "status": "offline"
    }
];
