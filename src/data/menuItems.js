const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Products',
    submenu: [
      {
        name: 'SPS',
        submenu1: [
          {
            name: 'MYID Self Verify',
            path: 'https://www.myidselfverify.com/',
            target: '_blank',
          },
          { name: 'Azalio', path: 'https://www.azal.io/', target: '_blank' },
          { name: 'BMS', path: 'https://www.spsnet.com/product-detail/cloud/devops/business-management-system', target: '_blank' },
          { name: 'CMS', path: 'https://www.spsnet.com/product-detail/cloud/devops/csm', target: '_blank' },
        ],
      },
      {
        name: 'IBM',
        submenu1: [
          { name: 'Automation', path: 'https://www.spsnet.com/ibm/automation/', target: '_blank' },
          { name: 'Security', path: 'https://www.spsnet.com/ibm/data-ai/', target: '_blank' },
          { name: 'Data & AI', path: 'https://www.spsnet.com/ibm/data-ai/', target: '_blank' },
          { name: 'Sustainability', path: 'https://www.spsnet.com/ibm/data-ai/', target: '_blank' },
        ],
      },
      { name: 'Others', path: '/products/others' },
    ],
  },
  {
    name: 'Services',
    submenu: [
      {
        name: 'Cyber Security',
        submenu1: [
          { name: 'Network Security', path: 'https://www.spsnet.com/security/network-security', target: '_blank' },
          { name: 'SMaaS', path: 'https://www.spsnet.com/security/network-security', target: '_blank' },
          { name: 'GRC', path: 'https://www.spsnet.com/security/network-security', target: '_blank' },
          { name: 'Identity & Access', path: 'https://www.spsnet.com/security/network-security', target: '_blank' },
        ],
      },
      {
        name: 'Cloud',
        submenu1: [
          { name: 'Devoops', path: '/services/cloud/devoops' },
          { name: 'Migration Stat', path: '/services/cloud/migration-stat' },
        ],
      },
      {
        name: 'AI & Automation',
        submenu1: [
          { name: 'Data Science', path: '/services/ai-automation/data-science' },
          { name: 'Automation', path: '/services/ai-automation/automation' },
        ],
      },
      {
        name: 'Collaboration',
        submenu1: [
          { name: 'MYID Self Verify', path: '/services/collaboration/myid-self-verify' },
          { name: 'Azalio', path: '/services/collaboration/azalio' },
          { name: 'BMS', path: '/services/collaboration/bms' },
          { name: 'CMS', path: '/services/collaboration/cms' },
        ],
      },
      {
        name: 'Training',
        submenu1: [
          { name: 'Oil & Gas', path: '/services/training/oil-gas' },
          { name: 'IBM', path: '/services/training/ibm' },
          { name: 'BMS', path: '/services/training/bms' },
          { name: 'CSM', path: '/services/training/csm' },
        ],
      },
    ],
  },
  {
    name: 'Verticals',
    submenu: [
      {
        name: 'Public Sector',
        submenu1: [
          { name: 'Government', path: '/verticals/public-sector/government' },
          { name: 'HealthCare', path: '/verticals/public-sector/healthcare' },
          { name: 'Public Safety', path: '/verticals/public-sector/public-safety' },
          { name: 'Education', path: '/verticals/public-sector/education' },
        ],
      },
      {
        name: 'Industrial',
        submenu1: [
          { name: 'Manufacturing', path: '/verticals/industrial/manufacturing' },
          { name: 'Textile', path: '/verticals/industrial/textile' },
          { name: 'Utility', path: '/verticals/industrial/utility' },
        ],
      },
      { name: 'Health Care', path: '/verticals/health-care' },
      { name: 'Retail', path: '/verticals/retail' },
      { name: 'Energy', path: '/verticals/energy' },
      { name: 'Financial', path: '/verticals/financial' },
      { name: 'Telecommunications', path: '/verticals/telecommunications' },
    ],
  },
  {
    name: 'SpinnLabs',
    submenu: [
      { name: 'Overview', path: 'https://www.spsnet.com/spinnlabs_practice/overview', target:'_blank', },
      { name: 'Academia', path: 'https://www.spsnet.com/spinnlabs_practice/n-a', target:'_blank', },
      { name: 'Industry', path: 'https://www.spsnet.com/spinnlabs_practice/industry', target:'_blank', },
      { name: 'Startups', path: 'https://www.spsnet.com/spinnlabs_practice/r-amp-d', target:'_blank', },
    ],
  },
  {
    name: 'Activities',
    submenu: [
      { name: 'Internship Program', path: 'https://www.spsnet.com/spinnlabs_practice/internship-to-job-program/howitworks.php' },
      {
        name: 'Webinar',
        submenu1: [{ name: 'Past Webinars', path: 'https://www.spsnet.com/sps-events/past-events/' }],
      },
      {
        name: 'workShops',
        submenu1: [],
      },
      { name: 'Training', path: 'https://www.spsnet.com/training/?vendor=U1BTLU9pbCAmIEdhcw==' },
    ],
  },
  {
    name: 'AboutUs',
    submenu: [
      { name: 'Our Story', path: 'https://www.spsnet.com/about_us/' },
      { name: 'Careers', path: 'https://www.spsnet.com/careers/' },
    ],
  },
  {
    name: 'Contracts',
    submenu: [
      {
        name: 'VITA',
        submenu1: [{ name: 'Pricing', path: 'https://www.spsnet.com/vita-pricing/' }],
      },
    ],
  },
  {
    name: 'Contacts',
    path: 'https://www.spsnet.com/contact-us/',
  },
];

export default menuItems;
