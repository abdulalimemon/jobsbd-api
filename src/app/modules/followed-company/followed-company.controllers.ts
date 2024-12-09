import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import FollowedCompanyServices from './followed-company.services';

const followCompany = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const { companyId } = req.body;
  const result = await FollowedCompanyServices.followCompany(
    companyId,
    userId!,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Company followed successfully.',
    data: result,
  });
});
const getAllFollowedCompany = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const result = await FollowedCompanyServices.getAllFollowedCompany(userId!);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: '',
    data: result,
  });
});

const FollowedCompanyControllers = {
  followCompany,
  getAllFollowedCompany,
};
export default FollowedCompanyControllers;