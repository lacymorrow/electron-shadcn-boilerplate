import { $messages } from '@/config/strings';
import { cn } from '@/lib/utils';

import { Loader2Icon, WifiIcon, WifiOffIcon } from 'lucide-react';
import { useIsOnline } from 'react-is-online-context';

const twclasses = 'w-4 h-4 inline-block -mt-1 mr-1';

function OnlineStatus() {
	const { isOnline, isLoading, error } = useIsOnline(); // TODO: useIsOnline crashes if blocked

	return (
		<div>
			{isOnline ? (
				<div>
					<WifiIcon className={twclasses} />
					{$messages.online}
				</div>
			) : (
				<div>
					{isLoading ? (
						<Loader2Icon className={cn(twclasses, 'animate-spin')} />
					) : (
						<WifiOffIcon className={twclasses} />
					)}
					{error ? String(error) : $messages.offline}
				</div>
			)}
		</div>
	);
}

export default OnlineStatus;
