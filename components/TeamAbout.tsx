const people = [
    {
      name: 'Leonna Krasner',
      role: 'Jewelry Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlYWd1ZXxlbnwwfHwwfHx8MA%3D%3D',
      bio: 'Creates original jewelry concepts, sketches, and technical drawings. Possesses a strong understanding of trends, materials, and manufacturing processes. Creative, trendsetter, technical.',
    },
    {
      name: 'Kate Lawernce',
      role: 'Production Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvbGxlYWd1ZXxlbnwwfHwwfHx8MA%3D%3D',
      bio: 'Oversees the entire production process, ensuring quality, efficiency, and adherence to timelines. Requires strong organizational and communication skills. Organized, leader, communicator.',
    },
    {
      name: 'Kim Bonnet',
      role: 'Jewelry Sales Associate',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      bio: 'Assists customers in selecting and purchasing jewelry. Provides product knowledge, excellent customer service, and upselling opportunities. Personable, sales-driven, customer-focused.',
    },
    {
      name: 'Vanessa Morgan',
      role: 'Customer Service Representative',
      imageUrl:
        'https://images.unsplash.com/photo-1554727242-741c14fa561c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      bio: 'Addresses customer inquiries and concerns related to jewelry purchases and repairs. Requires excellent communication and problem-solving skills. Customer-focused, problem-solver, communicator.',
    },
    // More people...
  ]
  
  export default function TeamAbout() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  