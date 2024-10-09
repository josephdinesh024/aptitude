
import Link from "next/link";

export default function Home() {
  
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    <p>loraddj ajnckjnd c akjc ja cakac nakcn ckacn kan ka ckanca</p>
    
    <details class="dropdown">
      <summary class="btn btn-accent m-1">Get Start</summary>
      <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li><Link href="/test/Random">Random Questins</Link></li>
        <li><Link href="/test/Age">Age Questins</Link></li>
        <li><Link href="/test/ProfitAndLoss">Profit And LossQuestins</Link></li>
        <li><Link href="/test/SpeedTimeDistance">Speed Time DistanceQuestins</Link></li>
        <li><Link href="/test/SimpleInterest">Simple InterestQuestins</Link></li>
        
      </ul>
    </details>
    </div>
  );
}
