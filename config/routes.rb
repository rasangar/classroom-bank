Rails.application.routes.draw do
  # root 'classbanks#index'
  root 'profiles#show'
  devise_for :users, :controllers => { :registrations => :registrations }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :classbanks, except: [:show]

  resources :classbanks, only:[:show] do
    resources :bank_accounts, only:[:index, :show]
    resources :account_setups, only:[:create]
  end

  resources :profiles, only: [:index,:show]
  resources :transactions, only:[:new, :create]

  namespace :api do
    namespace :v1 do
      resources :classbanks, only:[:index, :show]
      resources :profiles, only:[:index]
    end
  end

end
