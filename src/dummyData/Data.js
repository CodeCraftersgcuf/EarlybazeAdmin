export const Sidebar_links = [
    {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'bi bi-columns-gap',
        sublinks: []
    },
    {
        name: 'User Management',
        link: '/user/management',
        icon: 'bi bi-people',
        sublinks: []
    },
    {
        name: 'Wallet Management',
        link: '/wallet/virtual',
        icon: 'bi bi-wallet2',
        sublinks: [
            {
                name: 'Virtual Wallet',
                link: '/wallet/virtual',
                icon: 'bi bi-credit-card'
            },
            {
                name: 'Master Wallet',
                link: '/wallet/master',
                icon: 'bi bi-briefcase'
            }
        ]
    },
    {
        name: 'Transactions',
        link: '/Transactions',
        icon: 'bi bi-cash',
        sublinks: []
    },
    {
        name: 'Fee Management',
        link: '/fee/management',
        icon: 'bi bi-currency-dollar',
        sublinks: []
    },
    {
        name: 'Notifications',
        link: '/nodification',
        icon: 'bi bi-bell',
        sublinks: []
    },
    {
        name: 'KYC & Compliance',
        link: '/kyc&compliance/kyc',
        icon: 'bi bi-shield-check',
        sublinks: [
            {
                name: 'KYC',
                link: '/kyc&compliance/kyc',
                icon: 'bi bi-person-check'
            },
            {
                name: 'AMC Monitoring',
                link: '/kyc&compliance/amcMonitoring',
                icon: 'bi bi-clipboard-data'
            }
        ]
    },
    {
        name: 'Market Data',
        link: '/MarketData',
        icon: 'bi bi-graph-up',
        sublinks: []
    },
    {
        name: 'Security',
        link: '/security',
        icon: 'bi bi-lock',
        sublinks: []
    },
    {
        name: 'Referral Management',
        link: '/refferal/management',
        icon: 'bi bi-person-plus',
        sublinks: []
    },
    {
        name: 'Reports & Analytics',
        link: '/report&analytics',
        icon: 'bi bi-bar-chart',
        sublinks: []
    },
    {
        name: 'Logs',
        link: '/logs',
        icon: 'bi bi-clipboard',
        sublinks: []
    },
    {
        name: 'Support',
        link: '/support',
        icon: 'bi bi-headset',
        sublinks: []
    },
    {
        name: 'Team Chat',
        link: '/teamChat',
        icon: 'bi bi-chat-dots',
        sublinks: []
    },
    {
        name: 'Settings',
        link: '/Settings',
        icon: 'bi bi-gear',
        sublinks: []
    }
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
