export interface Message {
  id: string
  content: string
  timestamp: string
  isOwn: boolean
}

export interface Contact {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread?: boolean
}
