import React from "react";

export interface AddFieldButtonProps {
  onClick: () => void;
}

export default React.memo(function AddFieldButton({
  onClick
}: AddFieldButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      Add
    </button>
  );
});
