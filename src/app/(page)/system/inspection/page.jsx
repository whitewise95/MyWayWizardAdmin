import InspectionMessageTable from "@/app/(page)/system/inspection/component/InspectionMessageTable";
import InspectionButton from "@/app/(page)/system/inspection/component/InspectionButton";

function Page() {

  return (
      <div className={"p-3 gap-2 flex flex-col"}>
          <InspectionButton/>
          <InspectionMessageTable/>
      </div>
  );
}

export default Page;