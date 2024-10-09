
import Questions from "@/component/Qusetions";


export default function Home({params}) {
  
  const topics = params.topic
  return (
    <div className="h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Questions topic={topics}/>
      
    </div>
  );
}
