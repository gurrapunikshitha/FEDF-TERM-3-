export const generateTrackingId = () => {
  return "MSV" + Math.floor(100000 + Math.random() * 900000);
};