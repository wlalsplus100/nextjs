import RiceCake from "./RiceCake";

import Modal from "./modal";

export default function Home() {
  return (
    <div>
      <aside>
        <div className="callinder">캘린더</div>
        <Modal />
      </aside>
      <main>
        <h1>2023년 7월</h1>
        <ul>
          <li>일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li>토</li>
        </ul>
        <div className="flex week">
          <RiceCake day={"1"}></RiceCake>
          <RiceCake day={"2"}></RiceCake>
          <RiceCake day={"3"}></RiceCake>
          <RiceCake day={"4"}></RiceCake>
          <RiceCake day={"5"}></RiceCake>
          <RiceCake day={"6"}></RiceCake>
          <RiceCake day={"7"}></RiceCake>
        </div>
        <br />
        <div className="flex week week-1">
          <RiceCake day={"8"}></RiceCake>
          <RiceCake day={"9"}></RiceCake>
          <RiceCake day={"10"}></RiceCake>
          <RiceCake day={"11"}></RiceCake>
          <RiceCake day={"12"}></RiceCake>
          <RiceCake day={"13"}></RiceCake>
          <RiceCake day={"14"}></RiceCake>
        </div>
        <br />
        <div className="flex week week-2">
          <RiceCake day={"15"}></RiceCake>
          <RiceCake day={"16"}></RiceCake>
          <RiceCake day={"17"}></RiceCake>
          <RiceCake day={"18"}></RiceCake>
          <RiceCake day={"19"}></RiceCake>
          <RiceCake day={"20"}></RiceCake>
          <RiceCake day={"21"}></RiceCake>
        </div>
        <br />
        <div className="flex week week-3">
          <RiceCake day={"22"}></RiceCake>
          <RiceCake day={"23"}></RiceCake>
          <RiceCake day={"24"}></RiceCake>
          <RiceCake day={"25"}></RiceCake>
          <RiceCake day={"26"}></RiceCake>
          <RiceCake day={"27"}></RiceCake>
          <RiceCake day={"28"}></RiceCake>
        </div>
        <br />
        <div className="flex week week-4">
          <RiceCake day={"29"}></RiceCake>
          <RiceCake day={"30"}></RiceCake>
          <RiceCake day={"31"}></RiceCake>
        </div>
      </main>
    </div>
  );
}
