interface I_label {
  name: string
  url: string
  icon?: string
}

const labels: I_label[] = [
  {
    name: 'nas',
    url: 'http://nas.easondns.top',
  },
  {
    name: 'file',
    url: 'http://nas.easondns.top',
    icon: '/default.png',
  },
  {
    name: 'ptTime',
    url: 'http://nas.easondns.top',
    icon: '/one.jpg',
  },
  {
    name: 'HDSky',
    url: 'http://nas.easondns.top',
    icon: '/default.png',
  },
  {
    name: 'Github',
    url: 'http://nas.easondns.top',
  },
  // {
  //   name: 'YouTube',
  //   url: 'http://nas.easondns.top',
  //   icon: '',
  // },
  // {
  //   name: 'YouKu',
  //   url: 'http://nas.easondns.top',
  //   icon: '',
  // },
]

export { labels }
