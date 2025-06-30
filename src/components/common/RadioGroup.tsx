import { InputStatus } from '@/constants/input.constant';
import { CheckboxOptionType, Form, Radio, RadioProps } from 'antd';
import { FormItemLayout } from 'antd/es/form/Form';
import { ReactNode } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IRadioGroup extends RadioProps {
  control: Control;
  name: string;
  label?: string | ReactNode;
  defaultValue?: string | number;
  required?: boolean;
  layout?: FormItemLayout;
  options: CheckboxOptionType<string>[];
}

function RadioGroup(props: IRadioGroup) {
  const { control, name, label, defaultValue, required, layout, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const { message = '' } = fieldState.error || {};
        const status = message ? InputStatus.ERROR : '';
        return (
          <Form.Item
            label={label}
            validateStatus={status}
            help={message}
            required={required}
            layout={layout || 'vertical'}
          >
            <Radio.Group
              {...rest}
              className="flex flex-col"
              value={field.value || null}
              ref={field.ref}
              onChange={(...agrs) => {
                field.onChange(...agrs);
              }}
            />
          </Form.Item>
        );
      }}
    />
  );
}

export default RadioGroup;
