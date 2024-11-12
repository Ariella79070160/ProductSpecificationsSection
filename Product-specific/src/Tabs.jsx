import clsx from 'clsx'


const Tabs = ({tabs, value, onSelect}) => {
    return(
        <div className="isolate w-full overflow-x-auto overflow-y-hidden">
            <div
                className={clsx('flex items-center', ['border-b border-neutral-300'])}>
                <nav className={clsx('flex grow gap-6')}>
                    {tabs.map((item) => {
                        const { label:itemLabel, value:itemValue } = item
                        const isSelected = itemValue === value
                        const commonProps = {
                            children: (
                              <span
                                className={clsx(
                                  'flex items-center transition-all',
                                  'font-medium',
                                  isSelected ? 'text-indigo-700' : 'text-neutral-600',
                                )}>
                                {itemLabel}
                              </span>
                            ),
                            className: clsx(
                              'px-2 pb-[11px] whitespace-nowrap z-10 transition',
                              isSelected ? '-mb-px' : '',
                              isSelected &&
                                'border border-x-0 border-t-0 border-b-indigo-600',
                            ),
                            onClick: () => onSelect?.(itemValue),
                          };
                        return(
                            ( <button
                                key={String(itemValue)}
                                type="button"
                                {...commonProps}
                              />
                            ) 
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}

export default Tabs;