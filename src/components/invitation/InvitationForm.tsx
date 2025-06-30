'use client';
import { useRSVP } from '@/hooks/rsvp/useRSVP';
import { CreateRSVPBody, CreateRSVPBodySchema } from '@/schemas/rsvp/rsvp.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CheckboxOptionType } from 'antd';
import { Control, useForm } from 'react-hook-form';
import InputArea from '../common/InputArea';
import InputText from '../common/InputText';
import RadioGroup from '../common/RadioGroup';

function InvitationForm() {
  const { control, handleSubmit, reset } = useForm<CreateRSVPBody>({
    resolver: zodResolver(CreateRSVPBodySchema),
  });
  const { mutate: rsvp, isPending } = useRSVP(() => reset());

  const onSubmit = handleSubmit((data) => {
    rsvp(data);
  });

  const options: CheckboxOptionType[] = [
    {
      label: 'Tiệc cưới nhà trai',
      value: '1',
    },
    {
      label: 'Tiệc cưới nhà gái',
      value: '2',
    },
    {
      label: 'Không tham dự',
      value: '3',
    },
  ];

  return (
    <>
      <InputText
        control={control as unknown as Control}
        label="Tên của bạn"
        placeholder="Tên của bạn"
        name="name"
      />
      <InputText
        control={control as unknown as Control}
        label="Số điện thoại"
        placeholder="Số điện thoại"
        name="phoneNumber"
      />
      <RadioGroup
        control={control as unknown as Control}
        label="Bạn sẽ tham dự tiệc cưới nhà trai hay nhà gái?"
        name="rsvpSelected"
        options={options}
      />
      <InputArea
        control={control as unknown as Control}
        label="Lời chúc"
        placeholder="Gửi lời chúc của bạn"
        name="wish"
      />
      <Button type="primary" className="w-full" disabled={isPending} onClick={onSubmit}>
        Gửi xác nhận
      </Button>
    </>
  );
}

export default InvitationForm;
