import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addCategory } from '../../store/actions/product.actions';
import { adminAddCategoriesLoaderSelector } from '../../store/selectors/adminProduct.selector';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryComponent implements OnInit {
  @Output() completed = new EventEmitter();
  $addCategoryLoader: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.$addCategoryLoader = this.store.select(
      adminAddCategoriesLoaderSelector
    );
  }

  addCategory(category) {
    this.store.dispatch(addCategory({ category }));
    this.completed.emit();
  }
}
