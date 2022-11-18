import { createCorrectionFormatForInput } from '../../Modal/modal.functions';

export const checkTaskTime = (currentDate: Date, completionDate: string | null): boolean => {
  if (completionDate === null) return false;
  const currentDateTime = currentDate.getTime();
  const completionDateTime = new Date(createCorrectionFormatForInput(completionDate)).getTime();
  return currentDateTime > completionDateTime;
};
