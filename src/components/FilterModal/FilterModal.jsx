import styles from "../Notes/Notes.module.css";
import { useNotes } from "../../Context/NotesContext";
const FilterModal = () => {
  const { labels,  dispatch } = useNotes();
  const PriorityList= ["low","Medium","high"]

  return (
    <>
      <div className={styles.ModalFilter}>
        <h3>Sort By : Labels</h3>
        <form className="checklist">
          {labels.map((item, index) => {
            return (
              <label>
                <input
                  onClick={() =>
                    dispatch({ type: "FILTER_BY_TAG", payload: item })
                  }
                  type="radio"
                  name="RATINGS"
                  value={4}
                />
                {item}
              </label>
            );
          })}
        </form>

        <div>
          <h3>Sort By : Priority</h3>
          <form className="checklist">
          {PriorityList.map((item) => {
            return (
              <label>
                <input
                  onClick={() =>
                    dispatch({ type: "FILTER_BY_PRIORITY", payload: item })
                  }
                  type="radio"
                  name="RATINGS"
                  value={4}
                />
                {item}
              </label>
            );
          })}
          </form>
        </div>
        <div>
          <h3>Sort By : Date</h3>
          <form className="checklist">
            <div>
          <label>
                <input
                  onClick={() =>
                    dispatch({ type: "SORT_BY_DATE", payload: "oldest"})
                  }
                  type="radio"
                  name="RATINGS"
                  value={4}
                />
                oldest
              </label>
              <label>
                <input
                  onClick={() =>
                    dispatch({ type: "SORT_BY_DATE", payload: "latest"})
                  }
                  type="radio"
                  name="RATINGS"
                  value={4}
                />
               latest
              </label>
              </div>
      
          </form>
        </div>
        <div>
          <h3>Sort By : Date</h3>
          <form className="checklist">
            <div>
          <label>
                <input
                  onClick={() =>
                    dispatch({ type: "CLEAR_FILTERS", payload: "oldest"})
                  }
                  type="radio"
                  name="RATINGS"
                  value={4}
                />
               Clear
              </label>
            
              </div>
      
          </form>
        </div>
      </div>
    </>
  );
};

export { FilterModal };
