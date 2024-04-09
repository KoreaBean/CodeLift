import {useState} from "react";
import './course.css';

export default function NoteSection(){

    //메모 내용 관리
    const[note,setNote] = useState('');

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    return(
        <section className="flex-item note-section">
            <aside className="noteAside">
                <textarea
                    className="note-textarea"
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="여기에 메모를 입력하세요.."
                />
            </aside>
        </section>

    )
}