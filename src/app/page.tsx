import  Main from "./(usual)/common/top";
import bgStyle from "./(usual)/common/background.module.css";
import Bg from "./(usual)/common/bg";

export default function Top() {
  return (
    <>
    <Bg src="/image/bg-1.jpg" className={bgStyle.bg} />
    <div>
      <Main />
    </div>
    </>
  );
}
