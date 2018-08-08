Rails.application.routes.draw do
  root 'classbanks#index'
  devise_for :users, :controllers => { :registrations => :registrations }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :classbanks, except: [:show]

  resources :classbanks, only:[:show] do
    resources :bank_accounts, only:[:index, :show]
    resources :account_setups, only:[:create]
  end

end
