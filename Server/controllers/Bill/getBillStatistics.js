const {
  successMessage,
  internalErrorMessage,
} = require('../../helpers/responseMessage');

const { getBillStatistics } = require('../../database/query/Bills');

module.exports = (req, res) => {
  const { billId } = req.params;
  const user_id = 1;

  console.log(req.params);
  getBillStatistics(billId, user_id)
    .then((result) => {
      return res.status(200).json(
        successMessage({
          labels: ['ME', 'Person1', 'Person2', 'Person3', 'Person4', 'Person5'],
          datasets: [
            {
              label: 'Consumption',
              data: [200, 400, 600, 800, 1000, 1500],

              borderColor: '#fff',
              borderWidth: 1,
            },
          ],
        }),
      );
    })
    .catch((err) => {
      console.log('Error in get last bills : ', err);
      return res
        .status(501)
        .json(internalErrorMessage(null, 'Error Happens in get Bill Type '));
    });
};
