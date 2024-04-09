import './course.css';
import NoteSection from "./NoteSection";
import UserRequirementTable from "./UserRequirementTable";
import AsideLeft from "./AsideLeft";
import ContentDescription from "./ContentDescription";
export default function userRequirement(){
    return(
        <div>
            <ContentDescription/>
            <div className="flex-container">
                <AsideLeft/>
                <UserRequirementTable/>
              <NoteSection/>
            </div>
        </div>
    )
}
