import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(doctors: Array<any>, searchStr?: string, selectedValue?: string): any {
        return doctors.filter( doctor => {
            searchStr = searchStr.toUpperCase();
            let select;
            if (selectedValue === 'Усі лікарі') {
                select =  '';
            } else {
                select = selectedValue.toUpperCase();
            }

            const name = doctor.name.toUpperCase();
            const surename = doctor.surename.toUpperCase();
            const career = doctor.career.toUpperCase();
            const result = name.includes(searchStr) || surename.includes(searchStr);
            return result  && career.includes(select);
        });
    }
}
