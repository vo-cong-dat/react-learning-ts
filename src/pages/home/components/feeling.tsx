import { StartIcon } from '../../../components/icons';

export default function Feeling() {
  return (
    <div className="bg-[#FF8D0A] py-10 pl-4 space-y-6">
      <div className="text-[#FCFCFD] flex flex-col text-center pr-4">
        <span className="font-bold text-2xl">Cảm nghĩ học viên</span>
        <span className="font-medium text-sm leading-[24px]">
          See what some of our students have to say about our unbeatable support and outstanding
          services.
        </span>
      </div>
      <div className="flex gap-3">
        <div className="bg-[#FCFCFD] p-4 rounded-[12px] space-y-4">
          <div>
            <img src="public/images/studens/student-1.png" alt="" />
          </div>
          <div className="flex gap-1 mb-2">
            <StartIcon className="size-5" />
            <StartIcon className="size-5" />
            <StartIcon className="size-5" />
            <StartIcon className="size-5" />
            <StartIcon className="size-5" />
          </div>
          <div>
            I would definitely recommend Medlink Students! They offer a very professional service
            and make the application process very quick and easy.
          </div>
          <div>
            <div>Herman Miller</div>
            <div>Student</div>
          </div>
        </div>
      </div>
    </div>
  );
}
