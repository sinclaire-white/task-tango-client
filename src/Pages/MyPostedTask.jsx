const MyPostedTask = () => {
  return (
    <div>
      <div>
        <div>
         
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
        <div>
            <div className="join join-vertical">
  <button className="btn join-item">Update</button>
  <button className="btn join-item">Delete</button>
  <button className="btn join-item">Bids</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default MyPostedTask;
