const {
  successMessage,
  internalErrorMessage,
} = require('../../helpers/responseMessage');

const {
  getBillStatistics,
  getBillById,
} = require('../../database/query/Bills');

const { getPersonalInfo } = require('../../database/query/User');
const { getAddressById } = require('../../database/query/Address');

module.exports = async (req, res) => {
  const { billId, bill_type } = req.params;
  const user_id = 1;

  try {
    const results = await Promise.all([
      getPersonalInfo(user_id),
      getBillById(billId),
    ]);

    const user = results[0];
    const bill = results[1];
    console.log('user', user);
    console.log('bill', bill);

    //const address = await getAddressById(user.id);
  } catch (err) {
    console.log('Error in get statistics bills : ', err);
    return res
      .status(501)
      .json(internalErrorMessage(null, 'Error Happens in get Bill Type '));
  }
};

/**
 


getBillStatistics(billId, user_id)
      .then((result) => {
        return res.status(200).json(
          successMessage({
            labels: [
              'ME',
              'Person1',
              'Person2',
              'Person3',
              'Person4',
              'Person5',
            ],
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
      

 */
