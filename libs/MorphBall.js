import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

export default function MorphBall(props) {
	const maxDiameter = props.diameter;
	const diameterAnimatedValue = useRef(new Animated.Value(maxDiameter)).current;

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(
					diameterAnimatedValue,
					{
						toValue: 1.0,
						duration: props.cycleMS / 2.0,
						easing: Easing.in(Easing.ease),
						useNativeDriver: false,
					}
				),
				Animated.timing(
					diameterAnimatedValue,
					{
						toValue: maxDiameter,
						duration: props.cycleMS / 2.0,
						easing: Easing.out(Easing.ease),
						useNativeDriver: false,
					}
				),
			])
		).start();
	}, []);
	
	return (
		<Animated.View 
			style={{
				backgroundColor: 'black',
				...props.style,
				width: diameterAnimatedValue,
				height: diameterAnimatedValue,
				borderRadius: diameterAnimatedValue,
			}}
		>
			{props.children}
		</Animated.View>
    );
}

MorphBall.defaultProps = {
	cycleMS: 2000,
	diameter: 50,
};