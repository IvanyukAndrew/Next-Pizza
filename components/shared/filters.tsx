import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className=" mb-5 font-bold" />

      {/* checkbox верхні */}
      <div className="flex flex-col gap-1">
        <FilterCheckbox text="Можна собрати" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* ціна */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна</p>

        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Інгредієнти"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Сирний соус',
            value: '1',
          },
          {
            text: 'Моцарела',
            value: '2',
          },
          {
            text: 'Часник',
            value: '3',
          },
          {
            text: 'Солений огірок',
            value: '4',
          },
          {
            text: 'Червона цибулля',
            value: '5',
          },
          {
            text: 'Томати',
            value: '6',
          },
          {
            text: 'Гірчиця',
            value: '7',
          },
        ]}
        items={[
          {
            text: 'Сирний соус',
            value: '1',
          },
          {
            text: 'Моцарела',
            value: '2',
          },
          {
            text: 'Часник',
            value: '3',
          },
          {
            text: 'Солений огірок',
            value: '4',
          },
          {
            text: 'Червона цибулля',
            value: '5',
          },
          {
            text: 'Томати',
            value: '6',
          },
          {
            text: 'Гірчиця',
            value: '7',
          },
        ]}
      />
    </div>
  );
};
