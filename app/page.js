
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-10 lg:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-lg sm:text-2xl mb-4 sm:m-10 text-indigo-400">Discover Your Potential with Our Free IQ and Aptitude Test</h1>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <div className="sm:w-1/2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxsb8q1xNEfKvRUNUElBs9Gn-BTqV-LPoog&usqp=CAU" />
        </div>
        <div className="sm:w-1/2 relative pt-10">
          <p className="text-xl font-medium pb-4">Unlock your cognitive abilities with our scientifically designed IQ and aptitude test. Whether you're a student, a professional, or someone seeking personal growth, understanding your aptitude can help you make informed decisions about your future.</p>
          <details className="dropdown absolute right-10">
            <summary className="btn btn-accent m-1">Get Start</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><Link href="/test/Random">Random Questins</Link></li>
              <li><Link href="/test/Age">Age Questins</Link></li>
              <li><Link href="/test/ProfitAndLoss">Profit And LossQuestins</Link></li>
              <li><Link href="/test/SpeedTimeDistance">Speed Time DistanceQuestins</Link></li>
              <li><Link href="/test/SimpleInterest">Simple InterestQuestins</Link></li>
              
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}
