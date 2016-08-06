# sense
team 魔剤のコード置き場  

## install

~~~
git clone https://github.com/swkoubou/sense.git
cd sense
bundle install --path vendor/bundle
bundle exec rake db:migrate
~~~
  
## run

~~~
bundle exec ruby main.rb -o 0.0.0.0 -p 8000
~~~
