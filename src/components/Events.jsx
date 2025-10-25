import thon from "../assets/events/thon.jpg";
import garba from "../assets/events/garba.jpg";
import alumni from "../assets/events/alumni.jpg";
import moksha from "../assets/events/moksha.jpg";
import scribble from "../assets/events/scribble.jpg";
import farewell from "../assets/events/farewell.jpg";

function Events() {
  const events = [
    {
      id: 1,
      title: "NSUTTHON",
      description:
        "The annual flagship event of Crosslinks. It consists of orientations, auditions, workshops and competitions organized by various societies. It is a team-based event which promotes teamwork and leadership qualities. Every team is credited with specific points for every participation and win.",
      imageUrl: thon
    },
    {
      id: 2,
      title: "GARBA NIGHT",
      description:
        "A vibrant celebration of culture and tradition with music, dance, and community bonding. Join us for an evening filled with traditional Gujarati folk dance, colorful costumes, and the infectious energy of Garba and Dandiya Raas.",
      imageUrl: garba
    },
    {
      id: 3,
      title: "ALUMNI MEET",
      description:
        "A lovely reunion for all the alumni to reminisce about their good old days together. The alumni gathered to share their experiences with the students and discuss new ideas. It was organized in collaboration with Alumni Association, NSUT.",
      imageUrl: alumni
    },
    {
      id: 4,
      title: "MR. & MS. MOKSHA",
      description:
        "Mr. and Ms. Moksha, an event held at our college, is a celebration of charisma, talent, and personality. This competition showcases the finest qualities of students as they compete for the title with confidence and style.",
      imageUrl: moksha
    },
    {
      id: 5,
      title: "SCRIBBLE DAY",
      description:
        "Scribble Day is a creative see off to our beloved seniors. Cute, funny and some outrageous messages are signed off on t-shirts and even body parts during the event. Together with music and a lot of pictures to capture memories worth many years.",
      imageUrl: scribble
    },
    {
      id: 6,
      title: "FAREWELL",
      description:
        "Farewell day is a bittersweet occasion, marking the end of an important chapter in one's life and the start of a new journey. We at crosslinks organized a farewell day party bidding them a goodbye and wishing them for a new journey in their lives. Their memories and the bonds they formed will always be remembered and will be cherished.",
      imageUrl: farewell
    },
  ];

  return (
    <section id="events" className="py-16 sm:py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-white/8 static-blob-9"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-green-500/12 static-blob-10"></div>
      <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-green-400/10 static-blob-11"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 text-center mb-10 sm:mb-16">
          EVENTS
        </h2>

        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  {event.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {event.description}
                </p>
              </div>
              <div className="flex-1 relative w-full">
                <div className="glassmorphism-card w-full h-56 sm:h-72 lg:h-80 rounded-lg overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={`${event.title} Event Photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
