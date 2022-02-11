import { Button, Form, Input, Select } from "antd";
import { FormValues } from "types";
import { FiltersProps } from "./list-header";

export const Filters = (props: FiltersProps) => {
  const { formValues, onSubmit, toggleVisible, onPageChange } = props;

  return (
    <Form
      layout="horizontal"
      initialValues={formValues}
      onFinish={(values: FormValues) => {
        onPageChange(1);
        onSubmit?.(values);
      }}
      className="filters"
    >
      <Form.Item name="species">
        <Input width={100} placeholder="species" />
      </Form.Item>
      <Form.Item name="type">
        <Input placeholder="type" />
      </Form.Item>
      <Form.Item name="status">
        <Select placeholder="status">
          <Select.Option value="dead">Dead</Select.Option>
          <Select.Option value="alive">Alive</Select.Option>
          <Select.Option value="unknown">Unknown</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="gender">
        <Select placeholder="gender">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Apply
      </Button>
      <Button
        danger
        onClick={() => {
          onSubmit?.({
            gender: "",
            species: "",
            status: "",
            type: "",
          });
          toggleVisible(false);
        }}
      >
        Clear
      </Button>
      <Button onClick={() => toggleVisible(false)}>Close</Button>
    </Form>
  );
};
