export default function About() {
  return (
    <>
    <h1 className="text-center text-black text-4xl font-bold md:pt-14"> About</h1>
    <section className="flex flex-col md:flex-row items-center max-w-5xl mx-auto py-16 px-4 gap-8">
        
      <img
        src="/image.png"
        alt="Dr. Jennifer Fahm"
        className="w-48 h-48 rounded-full object-cover"
      />
      <div>
        <h3 className="text-3xl font-bold mb-4">Dr. Serena Blake, PsyD (Clinical Psychologist)</h3>
        <p className="text-gray-700 mb-4">
         8 years of practice, 500+ sessions
         About: Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
        </p>
        
      <h2><span className="text-black font-bold">Location: </span>1287 Maplewood Drive, Los Angeles, CA 90026</h2>
       <p> <span className="text-black font-bold">Phone: </span> (323) 555-0192
    <br></br>  <span className="text-black font-bold">Email:</span> [serena@blakepsychology.com]</p>
    <p className="text-black font-bold">Office Time</p> 
    <p>1. In-person: Tue & Thu, 10 AM–6 PM <br></br>
      <span>2. Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</span>
</p>
      </div>
    </section>
    </>
  );
}
