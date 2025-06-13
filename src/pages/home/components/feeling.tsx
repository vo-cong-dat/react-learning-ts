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
      <div className="flex gap-3 overflow-x-auto w-full">
        <div className="bg-[#FCFCFD] p-4 shrink-0 rounded-[12px] text-sm leading-6 font-[Inter] space-y-4 h-[378px] w-[278px]">
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
          <div className="text-[#667085] font-medium">
            I would definitely recommend Medlink Students! They offer a very professional service
            and make the application process very quick and easy.
          </div>
          <div>
            <div className="font-bold">Herman Miller</div>
            <div>Student</div>
          </div>
        </div>
        <div className="bg-[#FCFCFD] p-4 mr-4 shrink-0 rounded-[12px] text-sm leading-6 font-[Inter] space-y-4 h-[378px] w-[278px]">
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
          <div className="text-[#667085] font-medium line-clamp-4">
            I would definitely recommend Medlink Students! They offer a very professional service I
            would definitely recommend Medlink Students! They offer a very professional service I
            would definitely recommend Medlink Students! They offer a very professional service I
            would definitely recommend Medlink Students! They offer a very professional service and
            make the application process very quick and easy.
          </div>
          <div>
            <div className="font-bold">Herman Miller</div>
            <div>Student</div>
          </div>
        </div>
      </div>
    </div>
  );
}
