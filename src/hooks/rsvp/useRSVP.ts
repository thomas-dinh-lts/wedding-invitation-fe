import { modal, notification } from '@/components/common/AntdMessageWrapper';
import { rsvp } from '@/services/rsvp';
import { useMutation } from '@tanstack/react-query';

export const useRSVP = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: rsvp,
    onSuccess: () => {
      onSuccess?.();
      modal.info({
        content: 'Cảm ơn bạn đã xác nhận thông tin!',
      });
    },
    onError: () => {
      notification.error({
        message: 'Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại.',
      });
    },
  });
};
