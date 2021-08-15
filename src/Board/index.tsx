import { Grid } from "./Grid";

export const Board = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <Grid size={{ horizontal: 20, vertical: 10 }} />
    </div>
  );
};
