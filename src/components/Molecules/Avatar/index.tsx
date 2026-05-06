import type { IAvatarProps } from './types';
import React from 'react';
import { View, Image } from 'react-native';
import defaultAvatar from '../../../assets/img/defaultAvatar.png';
import { useStyles } from './styles';
import { buildLetters, buildSize } from './library';
import { Text } from '../../Atoms/Text';
import ContentLoader, { Circle } from 'react-content-loader/native';
import { useAvatarViewModel } from './hooks';
import { useRubberDuckStore } from '../../../store';

export const Avatar: React.FC<IAvatarProps> = (props) => {
  const { title, source, size = 'small_32' } = props;

  const {
    isImageStatic,
    hasError,
    isLoading,
    onLoad,
    onError,
  } = useAvatarViewModel(props);
  const colors = useRubberDuckStore((s) => s.colors);

  const letters = buildLetters(title || '');
  const avatarSize = buildSize(size);
  const styles = useStyles(props, avatarSize);

  return (
    <View style={styles.wrapper}>
      {source || !title ? (
        <>
          <Image
            source={isImageStatic
              ? source
              : !source || hasError
                ? defaultAvatar
                : source
            }
            resizeMode='cover'
            style={styles.avatar}
            onLoad={onLoad}
            onError={onError}
          />

          {isLoading ? (
            <ContentLoader
              speed={1}
              backgroundColor={colors.borderDefault}
              foregroundColor={colors.textPrimary}
              width={avatarSize}
              height={avatarSize}
              viewBox={`0 0 ${avatarSize} ${avatarSize}`}
              style={styles.ghostSkeleton}>
              <Circle
                cx={avatarSize / 2}
                cy={avatarSize / 2}
                r={avatarSize / 2}
              />
            </ContentLoader>
          ) : null}
        </>
      ) : (
        <View style={styles.lettersWrapper}>
          <Text
            align="center"
            color="white"
            size={size === 'medium_40' || size === 'small_32'
              ? 'md'
              : 'xl'
            }>
            {letters}
          </Text>
        </View>
      )}
    </View>
  );
};
