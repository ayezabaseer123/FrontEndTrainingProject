import type { Job, Company } from '@/types/jobs'
import type { Event, EventPlanner } from '@/types/events'
import type { Contact, Message } from '@/types/chat'

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Marketing Coordinator',
    company: 'Louis Vuitton',
    companyLogo: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=100',
    location: 'Lafayette, California',
    salary: '$50/hr',
    description: 'Join our marketing team and help drive innovative campaigns.'
  },
  {
    id: '2',
    title: 'Software Development Manager',
    company: 'Belle',
    companyLogo: 'https://images.pexels.com/photos/3370742/pexels-photo-3370742.jpeg?w=100',
    location: 'Stockton, New Hampshire',
    salary: '$80/hr',
    description: 'Lead a talented team of developers in building cutting-edge solutions.'
  },
  {
    id: '3',
    title: 'Team Leader',
    company: 'Orange',
    companyLogo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=100',
    location: 'Portland, Illinois',
    salary: '$100/hr',
    description: 'Manage and mentor a high-performing team.'
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    company: 'Design Studio',
    companyLogo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=100',
    location: 'Corona, Michigan',
    salary: '$110/hr',
    description: 'Create beautiful and intuitive user experiences.'
  }
]

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Maroni LLC.',
    logo: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=80',
    location: 'Portland, Illinois'
  },
  {
    id: '2',
    name: 'Acme Co.',
    logo: 'https://images.pexels.com/photos/3370742/pexels-photo-3370742.jpeg?w=80',
    location: 'Stockton, New Hamps...'
  },
  {
    id: '3',
    name: 'Gillette',
    logo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=80',
    location: 'Lafayette, California'
  },
  {
    id: '4',
    name: 'MasterCard',
    logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=80',
    location: 'Corona, Michigan'
  }
]

export const mockEventPlanners: EventPlanner[] = [
  {
    id: '1',
    name: 'Binford Ltd.',
    avatar: 'https://picsum.photos/id/50/100/100',
    rating: 5.0,
    phone: '+1-555-0100'
  },
  {
    id: '2',
    name: 'Louis Vuitton',
    avatar: 'https://picsum.photos/id/51/100/100',
    rating: 4.5,
    phone: '+1-555-0101'
  },
  {
    id: '3',
    name: 'LunaTech',
    avatar: 'https://picsum.photos/id/52/100/100',
    rating: 3.5,
    phone: '+1-555-0102'
  },
  {
    id: '4',
    name: 'Svelte Couture',
    avatar: 'https://picsum.photos/id/53/100/100',
    rating: 3.0,
    phone: '+1-555-0103'
  }
]

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Bear Valley Music Festival',
    category: 'Instrument Maintenance and Repair',
    description: 'Experience live music performances at the scenic Bear Valley.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600&h=400&fit=crop',
    time: '16h',
    date: 'Jul 24, 2024'
  },
  {
    id: '2',
    title: 'Interaction',
    category: 'Workshop',
    description: 'Interactive workshop for professionals and enthusiasts.',
    image: 'https://images.pexels.com/photos/5973833/pexels-photo-5973833.jpeg?w=600&h=400&fit=crop',
    time: '10h',
    date: 'Jul 24, 2024'
  },
  {
    id: '3',
    title: '99U Conference',
    category: 'Conference',
    description: 'Annual conference bringing together creative minds.',
    image: 'https://images.pexels.com/photos/5973833/pexels-photo-5973833.jpeg?w=600&h=400&fit=crop',
    time: '09h',
    date: 'Aug 1, 2024'
  },
  {
    id: '4',
    title: 'London Festival',
    category: 'Music Festival',
    description: 'Join us for a celebration of arts and music.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600&h=400&fit=crop',
    time: '19h',
    date: 'Sep 19, 2024'
  },
  {
    id: '5',
    title: 'REDO Cumulus',
    category: 'Summit',
    description: 'Tech and innovation summit for industry leaders.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=600&h=400&fit=crop',
    time: '09h',
    date: 'Dec 27, 2024'
  }
]

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Esther Howard',
    avatar: 'https://picsum.photos/id/1/80/80',
    lastMessage: 'Hey! How are you doing?',
    timestamp: '10:00 AM',
    unread: true
  },
  {
    id: '2',
    name: 'Eleanor Pena',
    avatar: 'https://picsum.photos/id/2/80/80',
    lastMessage: 'For athletes, high altitude produces...',
    timestamp: '9:00 AM',
    unread: false
  },
  {
    id: '3',
    name: 'Jane Cooper',
    avatar: 'https://picsum.photos/id/3/80/80',
    lastMessage: 'On the bustling German market',
    timestamp: '07:00 AM',
    unread: false
  },
  {
    id: '4',
    name: 'Brooklyn Simmons',
    avatar: 'https://picsum.photos/id/4/80/80',
    lastMessage: "Maxwell's equations—the foundation",
    timestamp: '06:00 AM',
    unread: false
  },
  {
    id: '5',
    name: 'Robert Fox',
    avatar: 'https://picsum.photos/id/5/80/80',
    lastMessage: 'The long barrow was built on sand praise',
    timestamp: 'Yesterday',
    unread: false
  },
  {
    id: '6',
    name: 'Guy Hawkins',
    avatar: 'https://picsum.photos/id/6/80/80',
    lastMessage: '077 4282 4770',
    timestamp: 'Yesterday',
    unread: false
  },
  {
    id: '7',
    name: 'Cody Fisher',
    avatar: 'https://picsum.photos/id/7/80/80',
    lastMessage: 'Barbecue Drink Latte in',
    timestamp: 'Friday',
    unread: false
  },
  {
    id: '8',
    name: 'Albert Flores',
    avatar: 'https://picsum.photos/id/8/80/80',
    lastMessage: 'Dust shelves & brick tracks',
    timestamp: 'Friday',
    unread: false
  }
]

export const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam',
    timestamp: '10:00 AM',
    isOwn: false
  },
  {
    id: '2',
    content: 'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus',
    timestamp: '10:01 AM',
    isOwn: true
  },
  {
    id: '3',
    content: 'In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultricies lacinia nunc. Aliquam erat volutpat eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus ut Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus',
    timestamp: '10:30 AM',
    isOwn: false
  },
  {
    id: '4',
    content: 'Lorem ipsum dolor sit amet, consectetur, se',
    timestamp: '10:32 AM',
    isOwn: true
  },
  {
    id: '5',
    content: 'Lorem dolor sit amt',
    timestamp: '10:32 AM',
    isOwn: true
  },
  {
    id: '6',
    content: 'Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam',
    timestamp: '10:40 AM',
    isOwn: false
  },
  {
    id: '7',
    content: 'In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultricies lacinia nunc. Aliquam erat volutpat eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus ut Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus',
    timestamp: '10:50 AM',
    isOwn: true
  },
  {
    id: '8',
    content: 'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus',
    timestamp: '11:40 AM',
    isOwn: false
  }
]
