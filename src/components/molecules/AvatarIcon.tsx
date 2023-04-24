import { Avatar } from '../atoms/Avatar'
import Icon from 'react-native-vector-icons/FontAwesome';
import { PropsWithChildren } from 'react';

interface AvatarIconProps extends PropsWithChildren {
  iconName: string,
  iconSizeEdit?: number
}

const AvatarIcon = ({ iconName, iconSizeEdit }: AvatarIconProps) => {
  return (
    <Avatar>
      <Icon name={iconName} size={iconSizeEdit ? iconSizeEdit : 25} />
    </Avatar>
  )
}

export { AvatarIcon }