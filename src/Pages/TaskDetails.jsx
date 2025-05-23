const TaskDetails = () => {
  return (
    <div className="p-20">
      {/* <div className="grid grid-cols-4">
                <div className="p-2 border-2 border-secondary">
                    <h3>Task name </h3>
                    
                    </div>
                <div className="col-span-3 p-2 border-2 border-l-0 border-secondary"><p>Write here</p></div>
            </div> */}
            
<div className="overflow-x-auto border-secondary ">
  <table className="table table-bordered">
    {/* head */}
    
    <tbody>
      {/* row 1 */}
      <tr>
        <th className="border border-secondary">1</th>
        <td className="border border-secondary">Cy Ganderton</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th className="border border-secondary">2</th>
        <td className="border border-secondary">Hart Hagerty</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th className="border border-secondary">3</th>
        <td className="border border-secondary">Brice Swyre</td>
      </tr>
      <tr>
        <th className="border border-secondary">3</th>
        <td className="border border-secondary">Brice Swyre</td>
      </tr>
      <tr>
        <th className="border border-secondary">3</th>
        <td className="border border-secondary">Brice Swyre </td>
      </tr>
      <tr>
        <th className="border border-secondary">3</th>
        <td className="border border-secondary">Brice Swyre</td>
      </tr>
    </tbody>
  </table>
</div>
      
    </div>
  );
};

export default TaskDetails;
