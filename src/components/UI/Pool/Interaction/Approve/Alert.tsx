import {
  PiInfoDuotone,
  PiSealCheckDuotone,
  PiWarningDuotone,
} from "react-icons/pi";

export const Alert = ({
  status,
  message,
}: {
  status: number;
  message: string;
}) => {
  return (
    <div
      role="alert"
      className={`relative overflow-hidden alert mb-2 ${status === -1 && `alert-error`} ${status === 3 && `alert-success`}`}
    >
      {status === -1 && (
        <PiWarningDuotone className="absolute inset-y-0 right-0 text-8xl -top-5 opacity-20" />
      )}
      {status > -1 && status < 3 && (
        <PiInfoDuotone className="absolute inset-y-0 right-0 text-8xl -top-5 opacity-5" />
      )}
      {status === 3 && (
        <PiSealCheckDuotone className="absolute inset-y-0 right-0 text-8xl -top-5 opacity-20" />
      )}
      <span>{message}</span>
    </div>
  );
};
