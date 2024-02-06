import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { simpleUUID } from '@/utils/getUUID';
import { throttle } from '@/utils/throttle';
import { useCallback, useMemo, useState } from 'react';

export function InputKeyboardShortcut({
	value,
	onChange,
	label,
	description,
	details,

	min,
	max,
	step,

	throttleDelay,
	...props
}: {
	value?: number;
	onChange?: (value: number) => void;
	label?: string;
	description?: string;
	details?: string;
	throttleDelay?: number;
	min?: number;
	max?: number;
	step?: number;
	props?: any;
}) {
	const [currentValue, setCurrentValue] = useState(
		typeof value === 'number' ? [value] : [0],
	);
	const uuid = useMemo(simpleUUID, []);

	const throttledOnChange = useMemo(() => {
		if (throttleDelay && onChange) {
			return throttle(onChange, throttleDelay);
		}
		return onChange;
	}, [throttleDelay, onChange]);

	const handleChange = useCallback(
		(val: number[]) => {
			const [result] = val;

			setCurrentValue([result]);

			if (throttledOnChange) {
				throttledOnChange(result);
			}
		},
		[throttledOnChange],
	);

	return (
		<div className="flex flex-col justify-between gap-2">
			<div className="flex flex-row items-center justify-between">
				<div className="space-y-0.5">
					{label && (
						<label htmlFor={uuid} className="font-medium text-base">
							{label}
						</label>
					)}
					{description && <p>{description}</p>}
				</div>
				{currentValue && (
					<p className="text-muted-foreground">{currentValue}</p>
				)}
			</div>

			{details && <p className="text-xs text-muted-foreground">{details}</p>}
		</div>
	);
}
