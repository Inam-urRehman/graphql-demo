import { Button, PageHeader, Input, Popover } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { Filters } from "./filters";
import { FormValues } from "types";
import { useState } from "react";

export interface FiltersProps {
  formValues: FormValues;
  toggleVisible: (visible: boolean) => void;
  onSubmit?: (values: FormValues) => void;
  onPageChange: (page: number) => void;
}

export interface ListHeaderProps extends Omit<FiltersProps, "toggleVisible"> {
  onSearch: (str: string) => void;
}

const { Search } = Input;

export const ListHeader = (props: ListHeaderProps) => {
  const { onSearch, ...filterProps } = props;
  const [showPopover, setShowPopover] = useState(false);

  return (
    <PageHeader
      className="listing-header"
      title={
        <div className="list-header">
          <span>List of characters</span>
          <div className="list-actions">
            <Search
              onSearch={(val) => {
                filterProps.onPageChange(1);
                onSearch(val);
              }}
              placeholder="input search text"
              enterButton
            />
            <Popover
              visible={showPopover}
              onVisibleChange={setShowPopover}
              trigger={"click"}
              placement="bottomRight"
              destroyTooltipOnHide
              content={
                <Filters {...filterProps} toggleVisible={setShowPopover} />
              }
            >
              <Button type="primary" icon={<FilterOutlined />} shape="circle" />
            </Popover>
          </div>
        </div>
      }
    />
  );
};
