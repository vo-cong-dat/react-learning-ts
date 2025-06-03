export default function Card() {
  return (
    <div className="md:w-[calc(25%-15px)] w-[287px] shrink-0">
      <img
        src="https://placehold.co/600x400"
        alt=""
        className="rounded-[8px] max-h-[206px] object-cover w-full"
      />
      <div className="mx-3 py-5 px-4 bg-white relative -top-9 shadow rounded-[8px]">
        <div className="font-bold text-lg text-[#1D2939]">PTE Achievers 30-36-42</div>
        <div className="text-[#667085] font-medium">
          This comprehensive program covers all aspects of the test, including speaking, writing,
          listening, and reading.
        </div>
      </div>
    </div>
  );
}
