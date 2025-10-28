import { useState } from "react";
import JobsListView from "./DisplayArea/JobsListView";
import AddApplicationModal from "./components/AddApplicationModal";

function App() {
  const [showAddApplication, setShowAddApplication] = useState(false);

  return (
      <div className="p-10 text-center">
      <button 
        onClick={() => setShowAddApplication((prev) => !prev)}
        className="bg-blue-400 text-white px-12 py-8 rounded-md hover:bg-blue-600"
      >+Add Application</button>
      <JobsListView />

      <AddApplicationModal
        open={showAddApplication}
        onClose={() => setShowAddApplication(false)}
        onSubmit={(data) => {
          console.log(data);
          setShowAddApplication(false);
        }}
      />
    </div>
  );
}

export default App;
