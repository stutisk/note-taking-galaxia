import { useNotes } from "../../Context/NotesContext";
import styles from "../../components/Notes/Notes.module.css";
const LabelsModal = () => {
  const { labels, setLabels } = useNotes();
console.log(labels);
  return (

      <ul className={`   ${styles.chipContainer}`}>
        {labels.map((item) => {
          return <option className={` padding1  ${styles.labellist} pointer   `}>{item}</option>
        })}
      </ul>
  
  );
};
export { LabelsModal };
